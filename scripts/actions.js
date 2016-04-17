goog.provide('coligo.scripts.actions');

coligo.scripts.actions = {

  FETCH_DEPARTMENT: Symbol('FETCH_DEPARTMENT'),
  FETCH_DEPARTMENTS: Symbol('FETCH_DEPARTMENTS'),
  DELETE_DEPARTMENT: Symbol('DELETE_DEPARTMENT'),
  SAVE_DEPARTMENT: Symbol('SAVE_DEPARTMENT'),

  FETCH_EMPLOYEES: Symbol('FETCH_EMPLOYEES'),
  FETCH_EMPLOYEE: Symbol('FETCH_EMPLOYEE'),
  UPDATE_EMPLOYEE: Symbol('UPDATE_EMPLOYEE'),
  DELETE_EMPLOYEE: Symbol('DELETE_EMPLOYEE'),

  FETCH_PROJECTS: Symbol('FETCH_PROJECTS'),
  FETCH_PROJECT: Symbol('FETCH_PROJECT'),
  UPDATE_PROJECT: Symbol('UPDATE_PROJECT'),
  DELETE_PROJECT: Symbol('DELETE_PROJECT'),

  DEPARTMENT_FETCHED: Symbol('DEPARTMENT_FETCHED'),
  EMPLOYEE_FETCHED: Symbol('EMPLOYEE_FETCHED'),

  EMPLOYEE_DELETED: Symbol('EMPLOYEE_DELETED'),
  DEPARTMENT_DELETED: Symbol('DEPARTMENT_DELETED'),

};

