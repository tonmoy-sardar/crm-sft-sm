import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingService {
  httpHeaderOptions: any;
  storage:any;
  constructor(
    private http: HttpClient
  ) {
    this.httpHeaderOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      })
    }
  }

  getOwlProperDate(date) {
    date = new Date(date)
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return date;
  }

  formatAngularDate(date) {
    var monthNames = [
      "January", "February", "March",
      "April", "May", "June", "July",
      "August", "September", "October",
      "November", "December"
    ];

    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();

    return monthNames[monthIndex].slice(0,3) + ' ' + day + ', ' + year;
  }

  formatDate(date,format?:string) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if(format == 'd:m:y'){
      return [day, month, year].join('-');
    }else{
      return [year, month, day].join('-');
    }
    
  }
  formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  }

  formatTime(time) {
    var date = new Date().toISOString().split('T')[0] + ' ' + time
    return new Date(date)
  }

  formatHMS(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    // hours = hours % 12;
    // hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    var strTime = hours + ':' + minutes + ':' + seconds;
    return strTime;
  }


  getProperDate(date) {
    date = new Date(date.year, date.month - 1, date.day);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    //console.log(date);
    return date;
  }

  getProperDateSpecial(date) {
    date = new Date(date)
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    console.log(date);
    return date;
  }
  getProperDateOnly(date) {

    date = new Date(date.year, date.month - 1, date.day);
    date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    date = new Date(date); //Using this we can convert any date format to JS Date
    var mm = date.getMonth() + 1; // getMonth() is zero-based
    var dd = date.getDate();
    if (mm < 10) {
      mm = "0" + mm;
    }
    if (dd < 10) {
      dd = "0" + dd;
    }
    return [date.getFullYear(), mm, dd].join('-'); // padding
  };


  havePermission(section, parentSection) {
    var permissionLevel = 0;
    var is_superuser = localStorage.getItem('is_superuser');
    if (is_superuser == "true") {
      permissionLevel = 3;
    }
    else {
      var current_module_access = JSON.parse(localStorage.getItem('current_module_access'));
      if (parentSection == '') {
        var index = current_module_access.object_details.findIndex(k => k.name == section);
        if (index != -1) {
          var permission = current_module_access.object_details[index].permission;
          permissionLevel = permission
        }
        else {
          permissionLevel = 3;
        }
      }
      else {

        var index = current_module_access.object_details.findIndex(k => k.name == parentSection);
        if (index != -1) {

          var childIndex = current_module_access.object_details[index].child_details.findIndex(j => j.cot_name == section);

          if (childIndex != -1) {

            var permission = current_module_access.object_details[index].child_details[childIndex].permission;

            permissionLevel = permission

          }
          else {
            permissionLevel = 3;
          }
        }
        else {
          permissionLevel = 3;
        }
      }
    }

    return permissionLevel;
  }

  getApprovalPermissionLevel(params): Observable<any> {
    return this.http.get(environment.apiEndpoint + 'approval_permission_list/?' + params, this.httpHeaderOptions)
  }

  getEmployeeListWithOutDetails(params) {
    return this.http.get(environment.apiEndpoint + 'employee_list_without_details/?' + params, this.httpHeaderOptions);
  }

  getRandomLightColor() {
		var letters = 'BCDEF'.split('');
		var color = '#';
		for (var i=0; i<6; i++ ) {
			color += letters[Math.floor(Math.random() * letters.length)];
		}
		var colorObj = {
			primary: color,
			secondary: color
		  }
		  return colorObj;
	  }

    getTaskAssignUserList(): Observable<any> {
      return this.http.get(environment.apiEndpoint+'employee_list_without_details_for_e_task/?page_size=0&team_approval_flag=1',this.httpHeaderOptions);
    }
}
