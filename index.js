const axios = require('axios');
const goodreadsapi = require('./config');
const goodreadsUri = 'https://www.goodreads.com';
const Customer = require('./schema/customer');
const Scheduler= require('./schema/schedule');

const {getDates} = require('./helper');

const { saveCustomer, getCustomer, saveSchedule } = require('./db/connection');

module.exports = {
    saveSchedule(data) {
        return new Promise(function (resolve, reject) {
            scheduler = new Scheduler();
            let tiffin = {};

            if(data.tiffinType === "3") {
                tiffin.launch = 40;
                tiffin.dinner = 40;
            } else if(data.tiffinType === "1") {
                tiffin.launch = 40;
            } else if(data.tiffinType === "2") {
                tiffin.dinner = 40;
            }

            const dateSchedule = getDates(new Date(data.startDate), new Date(data.endDate), tiffin, data.isWeekend);

            scheduler.CustomerId = new Object(data.customerId);
            scheduler.Date = dateSchedule
            return saveSchedule(scheduler).then(function(data) {
                return getCustomer().then(function(customers) {
                    resolve(customers);
                })
            });
        });
    },
    saveCustomer(data) {
        return new Promise(function (resolve, reject) {
            customer = new Customer()
            customer.FirstName = data.firstName;
            customer.LastName = data.lastName;
            customer.MiddleName = data.middleNam
            customer.Mobile = data.mobile;
            customer.Email = data.email;
            customer.CityName = data.cityName;
            customer.Sex = data.sex;

            return saveCustomer(customer).then(function(data) {
                return getCustomer().then(function(customers) {
                    resolve(customers);
                })
            });
        });
    },
    getCustomers() {
        return new Promise(function (resolve, reject) {
            return getCustomer().then(function(customers) {
                resolve(customers);
            })
        });
    }
};