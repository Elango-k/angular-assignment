import { Component, OnInit } from '@angular/core';

interface StudentLeave {
  enrollmentNumber: number;
  name: string;
  class: string;
  section: string;
  reason: string;
  leaveDate: string;
  status: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isModalOpen = false;
  isHoveredAdmin = false;
  isHoveredSchool = false;
  isHoveredManagement = false;
  isHoveredAcademics = false

  isHoveredClass = false;
  isHoveredSections = false;
  isHoveredSubjects = false;
  isHoveredTable = false;
  isHoveredLeave = false;
  isHoveredLive = false;
  isHoveredStudy = false;
  isHoveredWork = false;
  isHoveredNotice = false;
  isHoveredEvents = false;
  isHoveredAttendence = false;

  studentLeaves: StudentLeave[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  addLeave(newLeave: StudentLeave) {
    this.studentLeaves.push(newLeave);
  }
}
