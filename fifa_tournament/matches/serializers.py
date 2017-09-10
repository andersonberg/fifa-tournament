from rest_framework import serializers
from matches.models import Match, Player, Team, Tournament
from random import choice


class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('id', 'name', 'selected')


class PlayerSerializer(serializers.ModelSerializer):
    # team = serializers.SlugRelatedField(
    #     slug_field='name', queryset=Team.objects.all())

    class Meta:
        model = Player
        fields = ('id', 'name', 'team', 'match')


class MatchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Match
        fields = ('id', 'tournament')


class TournamentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tournament
        fields = ('id', 'name')

    def sorteia_time(self, teams, players):
        for player in players:
            team = choice(teams)
            player.team = team
            player.save()
            teams.remove(team)

    def create(self, validated_data):
        all_players = list(Player.objects.all())
        num_of_matches = int(len(all_players) / 2)
        teams = list(Team.objects.filter(selected=True))
        all_matches = []
        self.sorteia_time(teams, all_players)
        tournament = Tournament(**validated_data)
        tournament.save()
        for i in range(num_of_matches):
            first_player = choice(all_players)
            all_players.remove(first_player)

            second_player = choice(all_players)
            all_players.remove(second_player)

            data = {
                'tournament': tournament
            }
            import pdb
            pdb.set_trace()
            match = Match.objects.create(**data)

            first_player.match = match
            first_player.save()
            second_player.match = match
            second_player.save()
