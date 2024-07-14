import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
	constructor(private router: Router) { }

	navigatetohome() {
		this.router.navigate(['/dashboard']);
	}

	logout() {
		// this.authService.logout();
		this.router.navigateByUrl('/sign-in');
	}
}