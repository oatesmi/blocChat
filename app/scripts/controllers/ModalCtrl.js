(function() {
    function ModalCtrl(Room, $uibModalInstance){
        var modal = this;

        modal.open = function () {
            uibModalInstance.$open();
        };

        modal.close = function () {
            uibModalInstance.$dismiss();
        };

        modal.submit = function () {
            uibModalInstance.$close();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', 'uibModalInstance', ModalCtrl])
})();