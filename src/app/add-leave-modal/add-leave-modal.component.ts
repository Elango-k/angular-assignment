import { Component, EventEmitter, Output, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-leave-modal',
  templateUrl: './add-leave-modal.component.html',
  styleUrls: ['./add-leave-modal.component.css']
})
export class AddLeaveModalComponent implements OnInit {

  selectedClass: string = '';
  selectedSection: string = '';
  selectedStudent: string = '';
  reason: string = '';
  startDate: string = '';
  endDate: string = '';
  leaveStatus: string = '';
  leaveDays: string = '';

  @Output() newLeaveAdded = new EventEmitter<any>();

  constructor() { }
  @Output() close = new EventEmitter<void>();

  
  
  ngOnInit(): void {
  }

  closeModal() {
    this.close.emit();
  }

  addLeave() {
    const newLeave = {
      enrollmentNumber: Math.floor(Math.random() * 100000),
      name: this.selectedStudent,
      class: this.selectedClass,
      section: this.selectedSection,
      reason: this.reason,
      leaveDate: `${this.startDate} to ${this.endDate}`,
      status: this.leaveStatus
    };


    this.newLeaveAdded.emit(newLeave);
    this.closeModal();
    this.resetForm();
  }

  resetForm() {
    this.selectedClass = '';
    this.selectedSection = '';
    this.selectedStudent = '';
    this.reason = '';
    this.startDate = '';
    this.endDate = '';
    this.leaveStatus = '';
    this.leaveDays = ''
  }

}
