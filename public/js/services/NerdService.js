angular.module('NerdService', []).factory('Nerd', ['$http', ($htttp)=>{
    return {
        get: function() {
            return $htttp.get('/api/nerds');
        },

        create: function(nerdData) {
            return $htttp.post('/api/nerds', nerdData);
        },

        delete: function(id) {
            return $htttp.delete('/apo/nerds/'+id);
        }

    }
}]);