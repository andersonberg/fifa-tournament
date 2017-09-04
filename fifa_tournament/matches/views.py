from django.shortcuts import render
from rest_framework import generics
from .models import Match, Player, Team, Tournament
from .serializers import MatchSerializer, PlayerSerializer, TeamSerializer, TournamentSerializer


class TeamList(generics.ListAPIView):
    """
    List of all teams
    """

    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class TeamRetrieve(generics.RetrieveAPIView):
    """
    Recovering a team.
    """

    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class TeamCreate(generics.CreateAPIView):
    """
    Create a new fifa team.
    """

    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class TeamUpdate(generics.UpdateAPIView):
    """
    Update a fifa team.
    """

    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class TeamDelete(generics.DestroyAPIView):
    """
    Delete a fifa team.
    """

    queryset = Team.objects.all()
    serializer_class = TeamSerializer


class PlayerList(generics.ListAPIView):
    """
    List of all players
    """

    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


class PlayerRetrieve(generics.RetrieveAPIView):
    """
    Recovering a player.
    """

    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


class PlayerCreate(generics.CreateAPIView):
    """
    Create a new fifa player.
    """

    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


class PlayerUpdate(generics.UpdateAPIView):
    """
    Update a fifa player.
    """

    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


class PlayerDelete(generics.DestroyAPIView):
    """
    Delete a fifa player.
    """

    queryset = Player.objects.all()
    serializer_class = PlayerSerializer


class MatchList(generics.ListAPIView):
    """
    List of all matches
    """

    queryset = Match.objects.all()
    serializer_class = MatchSerializer


class MatchRetrieve(generics.RetrieveAPIView):
    """
    Recovering a match.
    """

    queryset = Match.objects.all()
    serializer_class = MatchSerializer


class MatchCreate(generics.CreateAPIView):
    """
    Create a new fifa match.
    """

    queryset = Match.objects.all()
    serializer_class = MatchSerializer


class MatchUpdate(generics.UpdateAPIView):
    """
    Update a fifa match.
    """

    queryset = Match.objects.all()
    serializer_class = MatchSerializer


class MatchDelete(generics.DestroyAPIView):
    """
    Delete a fifa match.
    """

    queryset = Match.objects.all()
    serializer_class = MatchSerializer


class TournamentList(generics.ListAPIView):
    """
    List of all teams
    """

    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer


class TournamentRetrieve(generics.RetrieveAPIView):
    """
    Recovering a team.
    """

    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer


class TournamentCreate(generics.CreateAPIView):
    """
    Create a new fifa team.
    """

    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer


class TournamentUpdate(generics.UpdateAPIView):
    """
    Update a fifa team.
    """

    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer
    


class TournamentDelete(generics.DestroyAPIView):
    """
    Delete a fifa team.
    """

    queryset = Tournament.objects.all()
    serializer_class = TournamentSerializer
