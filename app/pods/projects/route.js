import Ember from 'ember';
import ENV from "../../config/environment";
import ajax from 'ic-ajax';

export default Ember.Route.extend({
    model: function(params) {
        return ajax({
            url: 'http://localhost:8000/api/v1/projects',
            type: 'get'
        }).then(function(projects) {
            projects.forEach(function(project) {
            });
            return projects;
        });
    }
});