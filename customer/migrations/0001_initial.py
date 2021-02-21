# Generated by Django 3.1.4 on 2021-02-21 21:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ListModel',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer_name', models.CharField(max_length=255, verbose_name='Customer Name')),
                ('customer_city', models.CharField(max_length=255, verbose_name='Customer Name')),
                ('customer_address', models.CharField(max_length=255, verbose_name='Customer Address')),
                ('customer_contact', models.IntegerField(default=0, verbose_name='Customer Contact')),
                ('customer_manager', models.CharField(max_length=255, verbose_name='Customer Manager')),
                ('creater', models.CharField(max_length=255, verbose_name='Who Created')),
                ('openid', models.CharField(max_length=255, verbose_name='Openid')),
                ('is_delete', models.BooleanField(default=False, verbose_name='Delete Label')),
                ('create_time', models.DateTimeField(auto_now_add=True, verbose_name='Create Time')),
                ('update_time', models.DateTimeField(auto_now=True, null=True, verbose_name='Update Time')),
            ],
            options={
                'verbose_name': 'data id',
                'verbose_name_plural': 'data id',
                'db_table': 'customer',
                'ordering': ['customer_name'],
            },
        ),
    ]
