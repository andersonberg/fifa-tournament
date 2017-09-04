from django.conf.urls import include, url
from django.contrib import admin
from django.views.generic import TemplateView


urlpatterns = [
    url(r'^djangojs/', include('djangojs.urls')),
    url(r'^', include('matches.urls')),
    url(r'^$', TemplateView.as_view(template_name='matches/teams.html'), name='home'),

]
