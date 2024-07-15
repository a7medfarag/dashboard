import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [RouterModule , NgClass],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
	constructor(private router: Router) { }

	navigatetohome() {
		this.router.navigate(['/dashboard']);
	}

  isActive(routerPath: string): boolean {
    return this.router.url === routerPath;
  }
	logout() {
		// this.authService.logout();
		this.router.navigateByUrl('/sign-in');
	}
}
