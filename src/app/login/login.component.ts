import { Component, OnInit } from '@angular/core';
import { Member } from '../member/Member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  member: Member = {
    username: '',
    password: '',
  };

  constructor(private memberService: MemberService) {}

  onClickSubmit(data: any) {
    // alert('Entered username:' + data.username + 'Entered password:' + data.password);
    const member: Member = {
      username: data.username,
      password: data.password,
    };
    this.memberService.loginMember(member);
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe((res) => {
      this.member = res;
    });
  }

  loginMember(member: Member): void {
    // this.memberService.createMember(member).subscribe((res) => {
    //   console.log(res);
    // });
    console.log(member);
  }

  ngOnInit(): void {
    // this.getMembers();
  }
}
