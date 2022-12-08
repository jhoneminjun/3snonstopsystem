function btn2(seq) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: 'btn btn-success',
            cancelButton: 'btn btn-danger'
        },
        buttonsStyling: true
    })

    swalWithBootstrapButtons.fire({
        title: '현재역 무정차 운행',
        text: "무정차 해제 시 열차 상황에 따라 다시 무정차 운행 할 수도 있습니다.",
        icon: 'warning',
        showCancelButton: true,
        cancelButtonText: '무정차 해제',
        cancelButtonColor: '#FF4500',
        confirmButtonText: '무정차 확인',
        confirmButtonColor: '#32CD32',

        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire(
                '무정차 운행중입니다.',
                '감사합니다. ',
                'success'
            )
        } else if (
            /* Read more about handling dismissals below */
            result.dismiss === Swal.DismissReason.cancel
        ) {
            swalWithBootstrapButtons.fire(
                '무정차 해제되었습니다.',
                '다시 무정차 운행될 수도 있습니다.',
                'error',
            ).then(function(){
                window.location.reload();
              })
        }
    })
}
