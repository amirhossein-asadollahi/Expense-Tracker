from django.db import models


class Category(models.Model):
    name = models.CharField(max_length=255)
    color = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Transaction(models.Model):
    TRX_TYPE = (
        ('e', 'Expense'),
        ('i', 'Income'),
    )
    
    title = models.CharField(max_length=255)
    amount = models.PositiveBigIntegerField()
    trx_type = models.CharField(choices=TRX_TYPE, max_length=1)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    note = models.TextField(null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
    
class FinancialGoal(models.Model):
    STATUS = (
        ('a', 'Active'),
        ('c', 'Completed'),
    )

    title = models.CharField(max_length=255)
    target_amount = models.PositiveBigIntegerField()
    current_amount = models.PositiveBigIntegerField()
    target_date = models.DateTimeField()
    color = models.CharField(max_length=255)
    icon = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

    status = models.CharField(choices=STATUS, max_length=1)
