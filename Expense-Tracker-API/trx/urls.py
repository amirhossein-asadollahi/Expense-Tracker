from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'category', views.CategoryViewSet, basename='category')
router.register(r'financial-goal', views.FinancialGoalViewSet, basename='financial-goal')
router.register(r'transaction', views.TransactionViewSet, basename='transaction')
 
urlpatterns = []

urlpatterns += router.urls