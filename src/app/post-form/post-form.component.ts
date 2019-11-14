import { Component, OnInit, Output } from "@angular/core";
import { Post } from "../post";
import { EventEmitter } from "events";
import { post } from "selenium-webdriver/http";

@Component({
  selector: "app-post-form",
  templateUrl: "./post-form.component.html",
  styleUrls: ["./post-form.component.css"]
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();
  newPost: Post = {
    title: "",
    thought: ""
  };

  constructor() {}
  submitPost() {
    this.submitted.emit(this.newPost);
  }
  ngOnInit() {}
}
