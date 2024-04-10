import json

from django.http.response import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from api.models import Company, Vacancy

def index(request):
    return render(request, 'api/index.html', {})

@csrf_exempt
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        companies_json = [c.to_json() for c in companies]
        return JsonResponse(companies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        company = Company.objects.create(name=data.get("name"),
                                         description=data.get("description"),
                                         city=data.get("city"),
                                         address=data.get("address"))
        return JsonResponse(company.to_json())

@csrf_exempt
def vacancy_list(request):
    if request.method == 'GET':
        vacancies = Vacancy.objects.all()
        vacancies_json = [v.to_json() for v in vacancies]
        return JsonResponse(vacancies_json, safe=False)
    elif request.method == 'POST':
        data = json.loads(request.body)
        vacancy = Vacancy.objects.create(name=data.get("name"),
                                         description=data.get("description"),
                                         salary=data.get("salary"),
                                         company=Company.objects.get(name=data.get("company")))

        return JsonResponse(vacancy.to_json())

@csrf_exempt
def company_list_id(request, pk=None):
    company = Company.objects.get(id=pk)
    if request.method == 'GET':
        return JsonResponse(company.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        company.name = data.get("name")
        company.description = data.get("description")
        company.city = data.get("city")
        company.address = data.get("address")
        company.save()
        return JsonResponse(company.to_json())
    elif request.method == 'DELETE':
        company.delete()
        return JsonResponse({"deleted": True})


@csrf_exempt
def company_vacancy(request, pk):
    company = Company.objects.get(id=pk)
    vacancies = company.vacancies.all()
    return JsonResponse({'vacancies': list(vacancies.values())})

@csrf_exempt
def vacancy_list_id(request, pk=None):
    vacancy = Vacancy.objects.get(id=pk)
    if request.method == 'GET':
        return JsonResponse(vacancy.to_json())
    elif request.method == 'PUT':
        data = json.loads(request.body)
        vacancy.name = data.get("name")
        vacancy.description = data.get("description")
        vacancy.salary = data.get("salary")
        vacancy.company = Company.objects.get(name=data.get("company"))
        vacancy.save()
        return JsonResponse(vacancy.to_json())
    elif request.method == 'DELETE':
        vacancy.delete()
        return JsonResponse({"deleted": True})

@csrf_exempt
def top_ten_vacancies(request):
    vacancies = Vacancy.objects.order_by('-salary')[:10]
    data = [{'id': vacancy.id, 'name': vacancy.name, 'description': vacancy.description, 'salary': vacancy.salary, 'company': vacancy.company.name} for vacancy in vacancies]
    return JsonResponse(data, safe=False)
