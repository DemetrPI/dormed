# Generated by Django 4.1.7 on 2023-03-25 07:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dormed_main', '0010_hotelnews_remove_price_item_en_remove_price_item_pl_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='program',
            name='description_en',
            field=models.TextField(blank=True, null=True, verbose_name='Description'),
        ),
        migrations.AddField(
            model_name='program',
            name='description_pl',
            field=models.TextField(blank=True, null=True, verbose_name='Description'),
        ),
        migrations.AddField(
            model_name='program',
            name='description_uk',
            field=models.TextField(blank=True, null=True, verbose_name='Description'),
        ),
        migrations.AddField(
            model_name='program',
            name='results_en',
            field=models.TextField(blank=True, null=True, verbose_name='Result'),
        ),
        migrations.AddField(
            model_name='program',
            name='results_pl',
            field=models.TextField(blank=True, null=True, verbose_name='Result'),
        ),
        migrations.AddField(
            model_name='program',
            name='results_uk',
            field=models.TextField(blank=True, null=True, verbose_name='Result'),
        ),
        migrations.AddField(
            model_name='program',
            name='title_en',
            field=models.CharField(max_length=250, null=True, unique=True, verbose_name='Title'),
        ),
        migrations.AddField(
            model_name='program',
            name='title_pl',
            field=models.CharField(max_length=250, null=True, unique=True, verbose_name='Title'),
        ),
        migrations.AddField(
            model_name='program',
            name='title_uk',
            field=models.CharField(max_length=250, null=True, unique=True, verbose_name='Title'),
        ),
    ]