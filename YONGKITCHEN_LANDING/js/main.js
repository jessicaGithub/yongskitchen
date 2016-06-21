$(document).ready(function(){

	function truckAnimation(){
		var truckAnimTl = new TimelineMax({yoyo: true, repeat: -1});
		var fumeAnimTl = new TimelineMax({yoyo: false, repeat: -1});

		truckAnimTl
			.to(["#truck"],0.2,{ease: RoughEase.ease.config({ template: Power2.easeNone, strength: 0.5, points: 20, taper: "none", randomize: true, clamp: false}), scaleY:1.005, x: 1, transformOrigin: "center bottom" })
		;

		fumeAnimTl
			.to(["#fume"],0,{alpha: 0, scale: 0, transformOrigin: "left center"})
			.to(["#fume"],0.5,{ease: Power2.easeOut, alpha: 1, scale: 1, transformOrigin: "left center"})
			.to(["#fume"],0.5,{alpha: 0, scale: 1.3, transformOrigin: "left center"},"+=0.3")
		;
	}

	truckAnimation();

    $(function() {
      $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top + 50
            }, 1000);
            return false;
          }
        }
      });
    });

	$("#heading_main").arctext({
		radius: 600,
		fitText	: false 
	})

	$('#contact-form').bootstrapValidator({
       live: 'disabled',
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            Name: {
                validators: {
                    notEmpty: {
                        message: 'The Name is required and cannot be empty'
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: 'The email address is required'
                    },
                    emailAddress: {
                        message: 'The email address is not valid'
                    }
                }
            },
            Message: {
                validators: {
                    notEmpty: {
                        message: 'The Message is required and cannot be empty'
                    }
                }
            }
        }
    }).on('success.form.bv', function(e) {
        // Prevent form submission
        e.preventDefault();
        // Get the form instance
        var $form = $(e.target);
        // Get the BootstrapValidator instance
        var bv = $form.data('bootstrapValidator');
        // Use Ajax to submit form data
  //       $.post( "thanks-for-contact.php", function( data ) {
		// 	console.log(data);
		// });

        // prepare Options Object 
        var options = { 
            target:     '#contact_form', 
            url:        'thanks-for-contacting-us.php?v=2', 
            success:    function() { 
                console.log("email sent successfully");
            } 
        }; 
        $form.ajaxSubmit(options);
    });
});
