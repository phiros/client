import Ember from 'ember';
import ENV from "../../../config/environment";
import ajax from 'ic-ajax';

export default Ember.Route.extend({
    model: function(params) {
      console.log('jobs project_id', this.modelFor("project").id);
        return ajax({
            url: 'http://localhost:8000/api/v1/projects/' + this.modelFor("project").id + '/jobs',
            type: 'get'
        }).then(function(jobs) {
            jobs.forEach(function(job) {
              if(job.parent.length > 0) job.hasParent = true
              job.receivedAt = new Date(job.receivedAt).toString()
              if(job.trigger === 'github') {
                job.trigger = `${job.trigger}:${job.triggerInfo.type}/${job.triggerInfo.general.author.username}`
              }
            });
            return jobs;
        }).catch(function(err) {
          return []
        });
    }
});