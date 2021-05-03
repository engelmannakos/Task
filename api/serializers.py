from rest_framework import serializers
from .models import Order, Round, miniRound

class OrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('id', 'date', 'status', 'apples', 'pears', 'peaches', 'got_apples', 'got_pears', 'got_peaches', 'all_fruit', 'collected')

class CreateOrderSerializer(serializers.ModelSerializer):
    class Meta:
        model = Order
        fields = ('apples', 'pears', 'peaches')

class RoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Round
        fields = ('id', 'apples', 'pears', 'peaches')

class CreateRoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = Round
        fields = ('apples', 'pears', 'peaches')

class miniRoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = miniRound
        fields = ('id', 'r_id', 'o_id', 'fruit', 'quantity')

class CreateminiRoundSerializer(serializers.ModelSerializer):
    class Meta:
        model = miniRound
        fields = ('r_id', 'o_id', 'fruit', 'quantity')