import {Component, ViewChild} from '@angular/core';
import {Content, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import { InfoService } from '../../../services/info';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs/Rx';
import { HttpClient} from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { HTTP } from '@ionic-native/http';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/**
 * Generated class for the UserProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var $:any;
@IonicPage({
	segment : 'UserProfile/:id'
})
@Component({
  selector: 'page-user-profile',
  templateUrl: 'user-profile.html',
})
export class UserProfilePage {
    @ViewChild(Content) content: Content;
	public profiledata:any;
	public activeItemdata:any;
	public followerdata:any;
	public followingdata:any;
	public feedbackdata:any;
	public trandingImgUrl:any = environment.imageProduct + '/product/';
	public userImg:any = environment.imageProduct + '/user/';
	public retrievedObject:any;
	public localItem:any;
	public getId:any;
	public changeusernamedata:any;
	public changepassworddata:any;
	public viewprofiledata:any;
	public editProfiledata:any;
	public showYear:any;
	public verificationResponsebusiness:any = null;
	public editProfileshow:boolean = false;
	public selectdValue:boolean = false;
	changePasswordForm : FormGroup;
	changeuserNameForm : FormGroup;
	changeuserProfileForm : FormGroup;
	public userSettings: any = {
		showCurrentLocation: true,
		showSearchButton: false,
		useGoogleGeoApi:true,
		locationIconUrl:"assets/images/369f997cef4f440c5394ed2ae6f8eecd.png",
		geoCountryRestriction: ['ae','kw','om','qa','sa']
	};
	
	constructor(public googleanalytics: GoogleAnalytics,public http_mobile: HTTP,public plt: Platform,public fb: FormBuilder,public http: HttpClient,public infoService:InfoService,public navCtrl: NavController, public navParams: NavParams) {
		this.changePasswordForm = fb.group({
			'currentpassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
			'newpassword': ['', Validators.compose([Validators.required, Validators.minLength(6)])],
			'confirmpassword': ['',Validators.compose([Validators.required])]
		},{validator: this.checkIfMatchingPasswords('newpassword', 'confirmpassword')});
		
		this.changeuserNameForm = fb.group({
			'username': ['', Validators.compose([Validators.required,Validators.maxLength(30)])],
		});
		
		this.changeuserProfileForm = fb.group({
			'fname': ['', Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')])],
			'lname': ['', Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')])],
			'payment_email':'',
			'nationality': '',
			'phonenumber': ['+971', Validators.compose([Validators.required])],
			'address1': ['', Validators.compose([Validators.required,Validators.minLength(3)])],
			'zipcode': '',
			'city': ['', Validators.compose([Validators.required,Validators.minLength(3),Validators.pattern('^[a-zA-Z]+$')])],
			'state': '',
			'dob': '',
			'address2': '',
			'radio-group': '',
			'country': '',
			'email' : ['', Validators.compose([Validators.required])],
		});
		if(this.plt.is('core') == false && this.plt.is('mobileweb') == false){
			this.googleanalytics.startTrackerWithId('UA-127414417-1').then(() => {
				this.googleanalytics.trackView('UserProfile');
			}).catch(e => console.log('Error starting GoogleAnalytics', e));
			
			this.userSettings.showCurrentLocation = false;
		}
	}

	checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string){
		return (group: FormGroup) => {
			let passwordInput = group.controls[passwordKey],
				passwordConfirmationInput = group.controls[passwordConfirmationKey];
			if (passwordInput.value !== passwordConfirmationInput.value) {
			  return passwordConfirmationInput.setErrors({notEquivalent: true})
			}
			else {
				return passwordConfirmationInput.setErrors(null);
			}
		}
	}
	
	autoCompleteCallback1(selectedData:any) {
        var postal_code:any = '',country:any = '', administrative_area_level_1:any = '',administrative_area_level_2:any = '',sublocality_level_1:any = '';
		if(selectedData.response == true){
			for(var add=0;add<selectedData.data.address_components.length;add++){
				
				if(selectedData.data.address_components[add].types[0] == 'postal_code'){
					postal_code = selectedData.data.address_components[add].long_name;
				}
				
				if(selectedData.data.address_components[add].types[0] == 'country'){
					country = selectedData.data.address_components[add].long_name;
				}
				
				if(selectedData.data.address_components[add].types[0] == 'administrative_area_level_1'){
					administrative_area_level_1 = selectedData.data.address_components[add].long_name;
				}
				
				if(selectedData.data.address_components[add].types[0] == 'administrative_area_level_2'){
					administrative_area_level_2 = selectedData.data.address_components[add].long_name;
				}
				
				if(selectedData.data.address_components[add].types[0] == 'sublocality_level_1'){
					sublocality_level_1 = selectedData.data.address_components[add].long_name;
				}
			}
			this.changeuserProfileForm.controls['zipcode'].setValue(postal_code);	
			this.changeuserProfileForm.controls['state'].setValue(administrative_area_level_1);	
			this.changeuserProfileForm.controls['country'].setValue(country);	
			this.changeuserProfileForm.controls['city'].setValue(administrative_area_level_2);	
			$('#address2').val(sublocality_level_1);	
		}		
    }
	
    ngAfterViewInit() {
        if(this.content._scroll) {
            this.content.ionScrollEnd.subscribe((data)=>{
				if(data == null)
					return false;
				if(this.plt.width() >= 769) {

					if (data.scrollTop >= "130") {
						$('.top-header').slideUp();
					} else {
						$('.top-header').slideDown();
					}
				}else{

					if (data.scrollTop >= "130") {
						$('.mobile-sell-now').slideUp();
					} else {
						$('.mobile-sell-now').slideDown();
					}
				}
            });
        }
    }

	ionViewWillEnter() {
        this.retrievedObject = localStorage.getItem('userInfo');
        if(this.retrievedObject == null || this.retrievedObject == ''){
            this.localItem = null;
        }else{
            this.localItem = JSON.parse(this.retrievedObject);
        }
        $( ".zoomContainer" ).remove();
		this.getId = this.navParams.data.id;
		$(document).prop('title','User Profile');
        $('#search-form')[0].reset();
		$('body').removeClass().addClass('UserProfile body');
        var d = new Date();
        this.showYear = d.getFullYear();
		this.showuserProfile();
	}

	showuserProfile(){
		var view_profile ={
			user_id:this.navParams.data.id
		}
		var view_feedback = {
            receiver_id : this.navParams.data.id,
            per_page : 5,
            feedback_type : 'Positive'
		}
		
		if(this.plt.is('core') == true || this.plt.is('mobileweb') == true || this.plt.is('android') == true){
			this.infoService.showLoading();
			const combined = Observable.forkJoin(
				this.http.post(environment.serverUrl + 'api/user/view-profile',view_profile,{headers: {"Auth":"dibdaaauth"}}).map((res: any) => res),
				this.http.post(environment.serverUrl + 'api/seller/view-active-product',view_profile,{headers: {"Auth":"dibdaaauth"}}).map((res: any) => res),
				this.http.post(environment.serverUrl + 'api/seller/view-followers',view_profile,{headers: {"Auth":"dibdaaauth"}}).map((res: any) => res),
				this.http.post(environment.serverUrl + 'api/seller/view-following',view_profile,{headers: {"Auth":"dibdaaauth"}}).map((res: any) => res),
				this.http.post(environment.serverUrl + 'api/feedback/view-feedback',view_feedback,{headers: {"Auth":"dibdaaauth"}}).map((res: any) => res)
			)
			
			combined.subscribe(latestValues => {
				const [ data_profile , data_active_product ,data_followers,data_followings , data_fedback] = latestValues;
				
				this.profiledata = data_profile.user;
				this.activeItemdata = data_active_product;
				this.followerdata = data_followers.follower;
				this.followingdata = data_followings.following;
				this.feedbackdata = data_fedback.feedback.data;

				this.infoService.hideLoading();
			});
		}else{
			let headers = {
				'Auth': 'dibdaaauth'
			};
			const combined = Observable.forkJoin(
				this.http_mobile.post(environment.serverUrl + 'api/user/view-profile',view_profile,headers).then((res: any) => res),
				this.http_mobile.post(environment.serverUrl + 'api/seller/view-active-product',view_profile,headers).then((res: any) => res),
				this.http_mobile.post(environment.serverUrl + 'api/seller/view-followers',view_profile,headers).then((res: any) => res),
				this.http_mobile.post(environment.serverUrl + 'api/seller/view-following',view_profile,headers).then((res: any) => res),
				this.http_mobile.post(environment.serverUrl + 'api/feedback/view-feedback',view_feedback,headers).then((res: any) => res)
			)
			
			combined.subscribe(latestValues => {
				const [ data_profile , data_active_product ,data_followers,data_followings , data_fedback] = latestValues;
				
				let convertdata_profile = JSON.parse(data_profile.data);
				this.profiledata = convertdata_profile.user;
				
				let convertdata_active_product = JSON.parse(data_active_product.data);
				this.activeItemdata = convertdata_active_product;
				
				let convertdata_followers = JSON.parse(data_followers.data);
				this.followerdata = convertdata_followers.follower;
				
				let convertdata_followings = JSON.parse(data_followings.data);
				this.followingdata = convertdata_followings.following;
				
				let convertdata_fedback = JSON.parse(data_fedback.data);
				this.feedbackdata = convertdata_fedback.feedback.data;

				this.infoService.hideLoading();
			});
		}
	}
	
	showProfileData(){
		this.editProfileshow = true;
		var prodile_data ={
			user_id:this.localItem.id
		}
		
		this.infoService.showLoading();

		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/view-profile',prodile_data,(response)=> {
			this.changeuserProfileForm.controls['fname'].setValue(response.user.data.first_name);	
			this.changeuserProfileForm.controls['lname'].setValue(response.user.data.last_name);
            (<any>document).getElementById('nationality').value = response.user.data.natinality;
			this.changeuserProfileForm.controls['phonenumber'].setValue(response.user.data.mobile_number);	
			this.changeuserProfileForm.controls['address1'].setValue(response.user.data.address[0]);	
			this.changeuserProfileForm.controls['zipcode'].setValue(response.user.data.address[2]);	
			this.changeuserProfileForm.controls['city'].setValue(response.user.data.address[3]);	
			this.changeuserProfileForm.controls['dob'].setValue(response.user.data.dob);	
			this.changeuserProfileForm.controls['payment_email'].setValue(response.user.data.payment_email);	
			this.changeuserProfileForm.controls['state'].setValue(response.user.data.address[5]);
			this.changeuserProfileForm.controls['email'].setValue(response.user.data.email);
			this.changeuserNameForm.controls['username'].setValue(response.user.data.display_name);
			(<any>document).getElementById('Country').value = response.user.data.address[4];
			this.viewprofiledata = response.user;
			var persons_pro = this.localItem;
			persons_pro.profile_pic = response.user.data.profile_pic;
			persons_pro.first_name = response.user.data.first_name;
			persons_pro.last_name = response.user.data.last_name;
			persons_pro.payment_email = response.user.data.payment_email;
			persons_pro.email = response.user.data.email;
			localStorage.setItem('userInfo',JSON.stringify(persons_pro));
			environment.localItem = persons_pro;
			
			this.infoService.hideLoading();
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	changePassword(){
		var change_password ={
			old_password : $('#current-password').val(),
			new_password : $('#newPassword').val(),
			user_id:this.localItem.id
		}
		
		this.infoService.showLoading();

		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/change-password',change_password,(response)=> {
			this.changepassworddata = response.user;
			this.infoService.hideLoading();
			this.setTimer('changePassword');
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
		
	readURL(val){
		var total_file = val.target.files[0];
		var picReader = new FileReader();
		picReader.addEventListener("load", function (event:any) {
			var picFile = event.target;
			$('.propicimg').attr('src',picFile.result);
			$('#hidden_img').val(picFile.result);
		});
		picReader.readAsDataURL(total_file);
	}
	
	changeUserName(){
		var change_username ={
			user_id:this.localItem.id,
			user_name : $('#user_name-edit').val()
		}
		
		this.infoService.showLoading();

		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/change-username',change_username,(response)=> {
			if(response.user.status == "success"){
				var persons = this.localItem;
				persons.display_name = $('#user_name-edit').val()
				localStorage.setItem('userInfo',JSON.stringify(persons));
				environment.localItem = persons;
			}
			this.changeusernamedata = response.user;
			this.infoService.hideLoading();
			this.setTimer('changeUserName');
		},(error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
	}
	
	setTimer(val:any){
		var self = this;
		if(val == 'changePassword'){
			setTimeout(function(){
				self.changepassworddata.status = 'none';
				(<any>document).getElementById("edit-password_form").reset();
			},4000);
		}else if(val == 'changeUserName'){
			setTimeout(function(){
				self.changeusernamedata.status = 'none';
				/*(<any>document).getElementById("edit-username_form").reset();*/
			},4000);
		}else if(val == 'hideselected'){
			setTimeout(function(){
				self.selectdValue = false;
			},4000);
		}
	}
	
	edituserProfile(val:any){
		if($('#Country').val() == '-1'){
			this.selectdValue = true;
			this.setTimer('hideselected');
		}else if($('input[name=radio-group]:checked') == false){
			this.selectdValue = true;
			this.setTimer('hideselected');
		}else {
			var editProData = {
				id : this.localItem.id,
				first_name : val.value.fname,
				last_name : val.value.lname,
				natinality : $('#nationality').val(),
				mobile_number : val.value.phonenumber,
				dob : val.value.dob,
				gender : $('input[name=radio-group]:checked').val(),
				prifile_image :$('#hidden_img').val(),
				address1 : val.value.address1,
				address2 : val.value.address2,
				postcode : val.value.zipcode,
				city : val.value.city,
				country : $('#Country').val(),
				payment_email : $('#paymentEmail').val(),
				state : $('#state').val(),
				email : val.value.email
			}
			
			if(this.changeuserProfileForm.controls['payment_email'].value == this.localItem.payment_email){
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/update-profile',editProData,(response)=> {
					if(response.user.status == 'fail'){
						this.editProfiledata = response;
						this.infoService.hideLoading();
					}else {
						var persons = this.localItem;
						persons.first_name = $('#first_name').val();
						persons.last_name = $('#last_name').val();
						persons.natinality = $('#nationality').val();
						persons.address = $('#address1').val() + ' ' + $('#address2').val() + ',' + $('#zipcode').val();
						persons.payment_email = $('#paymentEmail').val();
						persons.email = $('#useremail').val();
						localStorage.setItem('userInfo',JSON.stringify(persons));
						environment.localItem = persons;
						this.editProfiledata = response;
						this.infoService.hideLoading();
						this.showProfileData();
					}
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
			}else if (this.verificationResponsebusiness == null || this.verificationResponsebusiness.responseEnvelope.ack == 'Failure') {
				if(this.changeuserProfileForm.controls['payment_email'].value == ''){
					this.infoService.showLoading();
					this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/update-profile',editProData,(response)=> {
						if(response.user.status == 'fail'){
							this.editProfiledata = response;
							this.infoService.hideLoading();
						}else {
							var persons = this.localItem;
							persons.first_name = $('#first_name').val();
							persons.last_name = $('#last_name').val();
							persons.natinality = $('#nationality').val();
							persons.address = $('#address1').val() + ' ' + $('#address2').val() + ',' + $('#zipcode').val();
							persons.payment_email = $('#paymentEmail').val();
							persons.email = $('#useremail').val();
							localStorage.setItem('userInfo',JSON.stringify(persons));
							environment.localItem = persons;
							this.editProfiledata = response;
							this.infoService.hideLoading();
							this.showuserProfile();
						}
					},(error) => {
						console.log(error);
						this.infoService.hideLoading();
					});
				}
			}else{
				this.infoService.showLoading();
				this.infoService.callHttpFunction_post(environment.serverUrl + 'api/user/update-profile',editProData,(response)=> {
					if(response.user.status == 'fail'){
						this.editProfiledata = response;
						this.infoService.hideLoading();
					}else {
						var persons = this.localItem;
						persons.first_name = $('#first_name').val();
						persons.last_name = $('#last_name').val();
						persons.natinality = $('#nationality').val();
						persons.address = $('#address1').val() + ' ' + $('#address2').val() + ',' + $('#zipcode').val();
						persons.payment_email = $('#paymentEmail').val();
						persons.email = $('#useremail').val();
						localStorage.setItem('userInfo',JSON.stringify(persons));
						environment.localItem = persons;
						this.editProfiledata = response;
						this.infoService.hideLoading();
						this.showuserProfile();
					}
				},(error) => {
					console.log(error);
					this.infoService.hideLoading();
				});
			}
		}
	}
	
	closeEditProfile(){
		this.editProfileshow = false;
		this.showuserProfile();
	}

    showAllActiveItem(){
		localStorage.setItem('seller_Id',this.navParams.data.id);
		this.navCtrl.push('AllItemPage',{
			id:'SellerActiveItem'
		});
	}

	showuserProfilefunc(val:any){
		this.navCtrl.push('UserProfilePage',{
			id:val
		})
	}

	checkPaypalEmail(){
		var pass_data = {
			paypal_email: this.changeuserProfileForm.controls['payment_email'].value
		}
		this.infoService.showLoading();
		this.infoService.callHttpFunction_post(environment.serverUrl + 'api/pay/verify-paypal-email', pass_data, (response) => {
			this.verificationResponsebusiness = response;
			this.infoService.hideLoading();
		}, (error) => {
			console.log(error);
			this.infoService.hideLoading();
		});
    }

	gotoProductdetails(val:any){
		this.navCtrl.push('ProductDetails',{
			id : val
		});
	}
}