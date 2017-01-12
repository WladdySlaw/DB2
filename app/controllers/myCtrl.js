app.controller("myCtrl", function($scope) {
    $scope.count = 2;
    $scope.itemList = [{
        name: "Get a job in DB2",
        number: 1
    },{
        name: "Be happy",
        number: 2
    }];
    console.log($scope.itemList);
    $scope.addItemKey = function($event){
        var keyCode = $event.which || $event.keyCode;
        if (keyCode === 13) {
            var listLength = $scope.itemList.length + 1;
            $scope.itemList.push({ name: $scope.addText, number: listLength});
            $scope.addText = ('');
            console.log($scope.itemList);
        }
    };
    $scope.addItem = function(){
        var listLength = $scope.itemList.length + 1;
        $scope.itemList.push({ name: $scope.addText, number: listLength});
        $scope.addText = ('');
        console.log($scope.itemList);
    };
    $scope.removeItem = function (x) {
        $scope.itemList.splice(x, 1);
        console.log($scope.itemList);
        for(var i = 0; i<$scope.itemList.length; i++)
          {
             $scope.itemList[i].number = i+1;
          }
    };
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
        console.log($scope.itemList);
    }
});