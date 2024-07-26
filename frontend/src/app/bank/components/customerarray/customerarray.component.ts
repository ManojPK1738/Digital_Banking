import { Component } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';
// import { of } from 'rxjs';
import { CustomerTS } from '../../types/tstypes/Customerts';

@Component({
  selector: 'app-customerarray',
  // standalone: true,
  // imports: [],
  templateUrl: './customerarray.component.html',
  styleUrls: ['./customerarray.component.css']
})
export class CustomerarrayComponent {
  customers : CustomerTS[] = 
  [
    new CustomerTS("man","manoj@gmail.com","uuuu","pppp","rrrr","1")
    // new CustomerTS("L","sfvsef","as","sd","a","2")
  ];

  
}
