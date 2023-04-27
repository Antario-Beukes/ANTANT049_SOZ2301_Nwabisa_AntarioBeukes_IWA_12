const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 

const statuses = document.querySelectorAll('.status');
const reserve = document.querySelectorAll('.reserve');
const checkout = document.querySelectorAll('.checkout');
const checkIn = document.querySelectorAll('.checkin');

checkIn[0].style.color = '';
statuses[0].style.color = STATUS_MAP.overdue.color;
reserve[0] = STATUS_MAP.overdue.canReserve ? reserve[0].enabled = true : reserve[0].disabled = true;
checkout[0] = STATUS_MAP.overdue.canCheckout ? checkout[0].enabled = true : checkout[0].disabled = true;
checkIn[0] = STATUS_MAP.overdue.canCheckIn ? checkIn[0].enabled = true : checkIn[0].disabled = true;

checkIn[1].style.color = '';
statuses[1].style.color = STATUS_MAP.reserved.color;
reserve[1] = STATUS_MAP.reserved.canReserve ? reserve[1].enabled = true : reserve[1].disabled = true;
checkout[1] = STATUS_MAP.reserved.canCheckout ? checkout[1].enabled = true : checkout[1].disabled = true;
checkIn[1] = STATUS_MAP.reserved.canCheckIn ? checkIn[1].enabled = true : checkIn[1].disabled = true;

checkIn[2].style.color = '';
statuses[2].style.color = STATUS_MAP.shelf.color;
reserve[2] = STATUS_MAP.shelf.canReserve ? reserve[2].enabled = true : reserve[2].disabled = true;
checkout[2] = STATUS_MAP.shelf.canCheckout ? checkout[2].enabled = true : checkout[2].disabled = true;
checkIn[2] = STATUS_MAP.shelf.canCheckIn ? checkIn[2].enabled = true : checkIn[2].disabled = true;