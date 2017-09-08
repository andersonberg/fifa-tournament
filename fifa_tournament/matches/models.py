from django.db import models
from random import choice


class Team(models.Model):
    '''
    Represents a soccer team in Fifa
    '''
    name = models.TextField()
    selected = models.BooleanField(default=False)

    class Meta:
        ordering = ('name',)


class Player(models.Model):
    '''
    Represents a player on the match
    '''
    name = models.TextField()
    team = models.ForeignKey(
        'Team', related_name='players', on_delete=models.CASCADE, blank=True, null=True)
    match = models.ForeignKey('Match', blank=True, null=True)

    class Meta:
        ordering = ('name',)


class Match(models.Model):
    '''
    Represents a match with two players and teams
    '''
    tournament = models.ForeignKey('Tournament')

    class Meta:
        ordering = ('id',)


class Tournament(models.Model):
    '''
    A tournament has a group of matches
    '''
    name = models.TextField()

    class Meta:
        ordering = ('id',)

    # def save(self, *args, **kwargs):
    #     all_players = list(Player.objects.all())
    #     num_of_matches = len(all_players) / 2
    #     all_matches = []
    #     for i in range(num_of_matches):
    #         first_player = choice(all_players)
    #         all_players.remove(first_player)

    #         second_player = choice(all_players)
    #         all_players.remove(second_player)

    #         match = Match()
    #         match.players = [first_player, second_player]
    #         match.save()

    #         all_matches.append(match)

    #     self.matches = all_matches
    #     super(Tournament, self).save(*args, **kwargs)
