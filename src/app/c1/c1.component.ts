import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component {
/**
   * Handles form submission.
   * @param form - The NgForm object representing the form being submitted.
   */
onSubmit = (form: NgForm) => {
  if (form.valid) {
    console.log('Form Submitted!', form.value);
  } else {
    console.log('Form is invalid!');
  }

  if (this.hasCheckedCheckbox()) {
    console.log('Form submitted!');
  } else {
    console.log('Please select at least one checkbox before submitting.');
  }
};
//message of level
selectedLevel: string = '';
username="";
savemessage:string="";
getMessageForSelectedLevel(): any {
  let i = 0;
  while (i < 3) {
    switch (this.selectedLevel) {
      case 'beginner':
        this.savemessage = `Congratulations [${this.username}]! Your programming skills are impressive. Keep up the great work in level Beginner.`;
        break;

      case 'intermediate':
        this.savemessage = `Congratulations [${this.username}]! Your programming skills are impressive. Keep up the great work in level Intermediate!`;
        break;

      case 'advanced':
        this.savemessage = `Congratulations [${this.username}]! Your programming skills are impressive. Keep up the great work in level Advanced.`;
        break;

      default:
        this.savemessage = '';
        break;
    }
    i++;
  }
}
checkboxes: any[] = [
  { label: 'c++', isChecked: false },
  { label: 'javascript', isChecked: false },
  { label: 'java', isChecked: false },
  { label: 'python', isChecked: false },
];
hasCheckedCheckbox(): boolean {
  return this.checkboxes.some(checkbox => checkbox.isChecked);
}
}
