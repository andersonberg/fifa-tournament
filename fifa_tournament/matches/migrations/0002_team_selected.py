# -*- coding: utf-8 -*-
# Generated by Django 1.11.4 on 2017-09-01 23:43
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('matches', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='team',
            name='selected',
            field=models.BooleanField(default=False),
        ),
    ]
