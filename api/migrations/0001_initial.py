# Generated by Django 3.2 on 2021-04-30 19:44

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateTimeField(auto_now_add=True)),
                ('apples', models.IntegerField(default=0)),
                ('pears', models.IntegerField(default=0)),
                ('peaches', models.IntegerField(default=0)),
            ],
        ),
    ]
