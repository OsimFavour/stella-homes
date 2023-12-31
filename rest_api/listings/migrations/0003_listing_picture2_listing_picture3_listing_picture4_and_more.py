# Generated by Django 4.2.6 on 2023-10-17 06:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('listings', '0002_listing_picture1'),
    ]

    operations = [
        migrations.AddField(
            model_name='listing',
            name='picture2',
            field=models.ImageField(blank=True, null=True, upload_to='pictures/%Y/%m/%d'),
        ),
        migrations.AddField(
            model_name='listing',
            name='picture3',
            field=models.ImageField(blank=True, null=True, upload_to='pictures/%Y/%m/%d'),
        ),
        migrations.AddField(
            model_name='listing',
            name='picture4',
            field=models.ImageField(blank=True, null=True, upload_to='pictures/%Y/%m/%d'),
        ),
        migrations.AddField(
            model_name='listing',
            name='picture5',
            field=models.ImageField(blank=True, null=True, upload_to='pictures/%Y/%m/%d'),
        ),
        migrations.AlterField(
            model_name='listing',
            name='picture1',
            field=models.ImageField(blank=True, null=True, upload_to='pictures/%Y/%m/%d'),
        ),
    ]
