        let principal = 0;
        let interestRate = 0;
        let timesCompounded = 0;
        let amount = 0;


        const selectday = () => {
            event.preventDefault();
            let e = document.getElementById("ddlViewBy");
            let strUser = e.options[e.selectedIndex].text;
            document.getElementById("days-count").innerHTML = strUser;

            if (strUser === '10 - 30 days') {
                interestRate = parseFloat(document.getElementById("rate").value = 6 + '%')
            } else if (strUser === '31 - 60 days') {
                interestRate = parseFloat(document.getElementById("rate").value = 8 + '%')
            } else if (strUser === '61 - 90 days') {
                interestRate = parseFloat(document.getElementById("rate").value = 10 + '%')
            } else if (strUser === '91days to 2years') {
                interestRate = parseFloat(document.getElementById("rate").value = 13 + '%')
            } else if (strUser === 'Over 2 years') {
                interestRate = parseFloat(document.getElementById("rate").value = 31 + '%')
            }
        }

        let simpleInterest = () => {
                event.preventDefault();

                let principal = parseFloat(document.getElementById("amount").value);
                console.log(principal)
                interestRate = interestRate / 100;

                let simpleInt = principal * interestRate;
                console.log(simpleInt)

                let amount = (principal + simpleInt);

                if (isNaN(amount)) {
                    return document.getElementById("intertestearned").value = "₦" + ' ' + "0.00";
                }

                document.getElementById("intertestearned").value = "₦" + " " + simpleInt;
                document.getElementById("amountpayable").innerHTML = "₦ " + " " + amount;
                document.getElementById("amountpayables").innerHTML = "₦ " + " " + amount

            }
            // let charge = simpleInterest();

        // const charges = () => {

        //     let textes = charge.value;
        //     let amountpayable = document.getElementById("amountpayable")
        //     amountpayable.innerHTML = '₦' + ' ' + textes;
        // }

        $(function() {
            var $select = $('.js-example-basic-single');

            $select.select2({
                theme: 'classic',
                width: 'resolve'
            });
        });


        const display = () => {
            let txt = document.getElementById("amount").value;
            let neudisplay = document.getElementById('neu-principal')
            neudisplay.innerHTML = '₦' + ' ' + txt;
        }