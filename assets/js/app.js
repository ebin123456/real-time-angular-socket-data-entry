

var app = angular.module( "first", ['socket-io','ngGrid','ngDialog'] );

app.controller('firstcontroller', function($scope,$http,socket,ngDialog) {


    var dialog=""; 
   $scope.gridOptions = { 'data': 'myData' };
   loadData();
   $scope.refresh = function () {
    	loadData();
    }
    function loadData(){
    	$http.get("/first").success(function(data,satus,header){
    		$scope.users  = data;
        $scope.myData =data;
        

    	});
    }
  $scope.createUser = function(){
     data = {"nickname":$scope.first.nickname,'email':$scope.first.email};
    $http.post("/first/create",data).success(function(data,satus,header){
       $scope.users.push(data); 
       socket.emit('users', $scope.users);
    });
  };
  $scope.delete = function(id) {
      $http.get("/first/destroy/"+$scope.users[id].id).success(function(data,satus,header){
            
            if($scope.edit.id == $scope.users[id].id){
              $scope.edit.id = false;
            }
            $scope.users.splice(id, 1);
            socket.emit('users', $scope.users);
      });
    } ;

  $scope.edit = function(id) {
       
       $scope.edit.email = $scope.users[id].email;
       $scope.edit.nickname = $scope.users[id].nickname;
       $scope.edit.id = $scope.users[id].id;
       $scope.edit.index = id;
       dialog = ngDialog.open({ template: 'templateId',scope: $scope });
   } ;
   $scope.editUser = function() {
       id = $scope.edit.id;
       index = $scope.edit.index;
       if(typeof id =="undefined" ||  id == ""){
        alert("select a data");
        return false;
       }
      data = {"nickname":$scope.edit.nickname,'email':$scope.edit.email};
      $http.post("/first/update/"+id,data).success(function(data,satus,header){
          $scope.users[index].email =  $scope.edit.email;
          $scope.users[index].nickname =  $scope.edit.nickname;
          socket.emit('users', $scope.users);
          dialog.close();
      });
   } ;  

   socket.on("users_updated",function(data){
     
       $scope.users = data;
       $scope.myData =data;
       $scope.gridOptions = { data: 'myData' };
   });

   socket.on("screen_img",function(data){
    console.log("img")
     $scope.shot = data.img;
   });    
           

});

/*io.socket.on('connect', function socketConnected() {

  //alert("g");

    io.socket.on('hello', function(data) {
      io.socket.emit("r","done!!!!!!")
    });


})*/

 /* io.socket.on('users_updated', function(data) {
      alert("out side");
    });
    io.socket.on('hello', function(data) {
      alert(data);
    });*/