from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from . import views

urlpatterns = [
    url(r'^teams/$', views.TeamList.as_view()),
    url(r'^teams/(?P<pk>[0-9]+)/$', views.TeamRetrieve.as_view()),
    url(r'^teams/create/$', views.TeamCreate.as_view()),
    url(r'^teams/update/(?P<pk>[0-9]+)/$', views.TeamUpdate.as_view()),
    url(r'^teams/delete/(?P<pk>[0-9]+)/$', views.TeamDelete.as_view()),

    url(r'^players/$', views.PlayerList.as_view()),
    url(r'^players/(?P<pk>[0-9]+)/$', views.PlayerRetrieve.as_view()),
    url(r'^players/create/$', views.PlayerCreate.as_view()),
    url(r'^players/update/(?P<pk>[0-9]+)/$', views.PlayerUpdate.as_view()),
    url(r'^players/delete/(?P<pk>[0-9]+)/$', views.PlayerDelete.as_view()),

    url(r'^matches/$', views.MatchList.as_view()),
    url(r'^matches/(?P<pk>[0-9]+)/$', views.MatchRetrieve.as_view()),
    url(r'^matches/create/$', views.MatchCreate.as_view()),
    url(r'^matches/update/(?P<pk>[0-9]+)/$', views.MatchUpdate.as_view()),
    url(r'^matches/delete/(?P<pk>[0-9]+)/$', views.MatchDelete.as_view()),

    url(r'^tournaments/$', views.TournamentList.as_view()),
    url(r'^tournaments/(?P<pk>[0-9]+)/$', views.TournamentRetrieve.as_view()),
    url(r'^tournaments/create/$', views.TournamentCreate.as_view()),
    url(r'^tournaments/update/(?P<pk>[0-9]+)/$',
        views.TournamentUpdate.as_view()),
    url(r'^tournaments/delete/(?P<pk>[0-9]+)/$',
        views.TournamentDelete.as_view()),
]

urlpatterns = format_suffix_patterns(urlpatterns)
