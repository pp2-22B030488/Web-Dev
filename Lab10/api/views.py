import json

from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.views import APIView
from api.models import Company, Vacancy
from api.serializers import CompanySerializer,VacancySerializer

def index(request):
    return render(request, 'api/index.html', {})

class company_list(APIView):
    @csrf_exempt
    def get(self, request):
        companies = Company.objects.all()
        serializer = CompanySerializer(companies, many=True)
        return JsonResponse(serializer.data, safe=False)

    @csrf_exempt
    def post(self, request):
        serializer = CompanySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class vacancy_list(APIView):
    @csrf_exempt
    def get(self, request):
        vacancies = Vacancy.objects.all()
        serializer = VacancySerializer(vacancies, many=True)
        return JsonResponse(serializer.data, safe=False)

    @csrf_exempt
    def post(self, request):
        serializer = VacancySerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)



class company_list_id(APIView):
    @csrf_exempt
    def get(self, request, id=None):
        try:
            company = Company.objects.get(id=id)
            serializer = CompanySerializer(company)
            return JsonResponse(serializer.data)
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

    @csrf_exempt
    def put(self, request, id=None):
        try:
            company = Company.objects.get(id=id)
            serializer = CompanySerializer(company, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

    @csrf_exempt
    def delete(self, request, id=None):
        try:
            company = Company.objects.get(id=id)
            company.delete()
            return JsonResponse({"deleted": True})
        except Company.DoesNotExist:
            return JsonResponse({'error': 'Company not found'}, status=status.HTTP_404_NOT_FOUND)

class vacancy_list_id(APIView):
    @csrf_exempt
    def get(self, request, id=None):
        try:
            vacancy = Vacancy.objects.get(id=id)
            serializer = VacancySerializer(vacancy)
            return JsonResponse(serializer.data)
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)

    @csrf_exempt
    def put(self, request, id=None):
        try:
            vacancy = Vacancy.objects.get(id=id)
            serializer = VacancySerializer(vacancy, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return JsonResponse(serializer.data)
            return JsonResponse(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)

    @csrf_exempt
    def delete(self, request, id=None):
        try:
            vacancy = Vacancy.objects.get(id=id)
            vacancy.delete()
            return JsonResponse({"deleted": True})
        except Vacancy.DoesNotExist:
            return JsonResponse({'error': 'Vacancy not found'}, status=status.HTTP_404_NOT_FOUND)

@csrf_exempt
def company_vacancy(request, id):
    try:
        company = Company.objects.get(id=id)
        serializer = CompanySerializer(company)
        return JsonResponse(serializer.data)
    except Company.DoesNotExist:
        return JsonResponse({'error': 'Company not found'}, status=404)

@csrf_exempt
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    serializer = VacancySerializer(vacancies, many=True)
    return JsonResponse(serializer.data, safe=False)

@csrf_exempt
def listOf(request):
    if request.method == 'GET':
        companies = Company.objects.order_by('name')
        data = [{'name': company.name} for company in companies]
        return JsonResponse(data, safe=False)
