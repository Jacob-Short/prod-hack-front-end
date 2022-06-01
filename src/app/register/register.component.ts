import { Component, OnInit } from '@angular/core';
import { Member } from '../member/Member';
import { MemberService } from '../member.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  member: Member = {
    username: '',
    password: '',
    // bio: '',
  };

  constructor(private memberService: MemberService) {}

  onClickSubmit(data: any) {
    // alert('Entered username:' + data.username + 'Entered password:' + data.password);
    const member: Member = {
      username: data.username,
      password: data.password,
      // bio: data.bio,
    };
    this.createMember(member);
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe((res) => {
      this.member = res;
    });
  }

  createMember(member: Member): void {
    this.memberService.createMember(member).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnInit(): void {
    // this.getMembers();
  }
}
