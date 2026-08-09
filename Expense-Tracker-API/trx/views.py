from rest_framework.viewsets import ModelViewSet
from .models import FinancialGoal, Category, Transaction

from . import serializers

class CategoryViewSet(ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = serializers.CategorySerializer


class FinancialGoalViewSet(ModelViewSet):
    queryset = FinancialGoal.objects.all()
    serializer_class = serializers.FinancialGoalSerializer
    

class TransactionViewSet(ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = serializers.TransactionSerializer
    