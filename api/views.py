from django.shortcuts import render
from rest_framework import generics, status
from .serializers import OrderSerializer, CreateOrderSerializer, RoundSerializer, CreateRoundSerializer, miniRoundSerializer, CreateminiRoundSerializer
from .models import Order, Round, miniRound
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.

class OrderView(generics.ListAPIView):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer

class CreateOrderView(APIView):
    serializer_class = CreateOrderSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            apples = serializer.data.get('apples')
            pears = serializer.data.get('pears')
            peaches = serializer.data.get('peaches')
            all_fruit = apples+pears+peaches
            order = Order(apples=apples, pears=pears, peaches=peaches, all_fruit=all_fruit)
            order.save()
            return Response(OrderSerializer(order).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class GetOrder(APIView):
    serializer_class = OrderSerializer

    def get(self, request, format=None):
        order = Order.objects.all()
        if len(order) > 0:
            datas = []
            for ord in order:
                datas.append(OrderSerializer(ord).data)
            return Response(datas, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'There is no order'}, status=status.HTTP_404_NOT_FOUND)

class UpdateOrder(APIView):

    def post(self, request, format=None):
        _id = request.data.get('id')
        _got_apples = request.data.get('got_apples')
        _got_pears = request.data.get('got_pears')
        _got_peaches = request.data.get('got_peaches')
        order = Order.objects.get(id = _id)
        order.got_apples += _got_apples
        order.got_pears += _got_pears
        order.got_peaches += _got_peaches
        order.collected = order.got_apples+order.got_pears+order.got_peaches
        if order.collected == 0:
            order.status = "new"
        elif order.collected < order.all_fruit:
            order.status = "collecting"
        else:
            order.status = "done"
        order.save()
        return Response({'Order update happened'}, status=status.HTTP_200_OK)

class UpdateRound(APIView):

    def post(self, request, format=None):
        _id = request.data.get('id')
        _apples = request.data.get('apples')
        _pears = request.data.get('pears')
        _peaches = request.data.get('peaches')
        round = Round.objects.get(id = _id)
        round.apples -= _apples
        round.pears -= _pears
        round.peaches -= _peaches
        round.save()
        return Response({'Round update happened'}, status=status.HTTP_200_OK)


class RoundView(generics.ListAPIView):
    queryset = Round.objects.all()
    serializer_class = RoundSerializer

class CreateRoundView(APIView):
    serializer_class = CreateRoundSerializer

    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            print(serializer.data)
            apples = serializer.data.get('apples')
            pears = serializer.data.get('pears')
            peaches = serializer.data.get('peaches')
            round = Round(apples=apples, pears=pears, peaches=peaches)
            round.save()
            return Response(RoundSerializer(round).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)

class miniRoundView(generics.ListAPIView):
    queryset = miniRound.objects.all()
    serializer_class = miniRoundSerializer

class CreateminiRoundView(APIView):
    
    def post(self, request, format=None):
        r_id = request.data.get('r_id')
        o_id = request.data.get('o_id')
        fruit = request.data.get('fruit')
        quantity = request.data.get('quantity')
        miniround = miniRound(r_id=r_id, o_id=o_id, fruit=fruit, quantity=quantity)
        miniround.save()
        return Response({'Round update happened'}, status=status.HTTP_200_OK)

class GetRound(APIView):
    def get(self, request, format=None):
        round = Round.objects.all() 
        if len(round) > 0:
            datas = []
            for rou in round:
                datas.append(RoundSerializer(rou).data)
            return Response(datas, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'There is no round'}, status=status.HTTP_404_NOT_FOUND)


class GetminiRound(APIView):
    def get(self, request, format=None):
        miniround = miniRound.objects.all()
        if len(miniround) > 0:
            datas = []
            for rou in miniround:
                datas.append(miniRoundSerializer(rou).data)
            return Response(datas, status=status.HTTP_200_OK)
        return Response({'Bad Request': 'There is no miniround'}, status=status.HTTP_404_NOT_FOUND)