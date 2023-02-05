import django_filters
from .models import Menus

class MenusFilters(django_filters.FilterSet):
    class Meta:
        model = Menus
        fields = ['title', 'category', 'tags']



