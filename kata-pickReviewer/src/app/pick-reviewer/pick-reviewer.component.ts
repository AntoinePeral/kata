import { Component } from '@angular/core';


  interface Students {
    name: string;
    hasReviewed: boolean;
  }
  
@Component({
  selector: 'app-pick-reviewer',
  standalone: true,
  imports: [],
  templateUrl: './pick-reviewer.component.html',
  styleUrl: './pick-reviewer.component.scss'
})
export class PickReviewerComponent {
  public students: Students[] = [ 
    { name: 'Alice', hasReviewed: true },
    { name: 'Bob', hasReviewed: true },
    { name: 'Charlie', hasReviewed: true },
    { name: 'David', hasReviewed: true } 
  ];
  
  public pickViewer : string = '';
  public alreadyChosen : string[]= []

 
  public pickReviewer() : void {
    // Eleves qui n'ont pas encore corrigé
    let studentsToReview = this.students.filter(student => !student.hasReviewed);
    console.log(studentsToReview);
      
    // Si le tableau retourne aucun élément alors rénitialiser le tableau 
    if(studentsToReview.length === 0) {
      this.students.forEach(student=>student.hasReviewed = false)
      studentsToReview = this.students;
    }
    
    // Créé un index aléatoire pour les sélectionner
    let randomIndex = Math.floor(Math.random()*studentsToReview.length);
    
    // Choix de l'élève
    const chosenStudent = studentsToReview[randomIndex];
    console.log(chosenStudent);
    
  
    // Passer le hasReviewed à true
    chosenStudent.hasReviewed = true;

    //Push dans la tableau des personnes passé
    this.alreadyChosen.push(chosenStudent.name)
    console.log(this.alreadyChosen);
    

    // Mettre en valeur de l'étudiant choisi à l'attribut pickViewer
    this.pickViewer = chosenStudent.name;
  }

  public initChosenArray(){
    this.alreadyChosen = [];
  }  
}
