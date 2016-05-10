/**
 * Created by bing04.yang on 2016/3/15.
 */
requirejs.config({
    baseUrl:'dist/js',
    paths:{
        app:'app',
        jquery:'jquery/dist/jquery.min',
        angular:'angular/angular.min'
    },
    shim:{
        angular:{exports:'angular'}
    },
    map:{
        '*':{'jquery':'jquery-private'},
        'jquery-private':{'jquery':'jquery'}
    }
});

//requirejs("angular");
define(['angular'],function(ng){

});
//define(['jquery'],function($){
//    $(function(){
//        $("input").attr("placeholder","请输入名字");
//    });
//});