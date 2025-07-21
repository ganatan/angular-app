package com.ganatan.modules.person;

public class Person {
	private Long id;
	private String firstName;
	private String lastName;

	public Person(Long id, String firstName, String lastName) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public Long getId() {
		return id;
	}

	public String getFirstName() {
		return firstName;
	}

	public String getLastName() {
		return lastName;
	}
}

//package com.ganatan.modules.person;
//
//public class Person {
//    private String name;
//
//    public Person() {}
//
//    public Person(String name) {
//        this.name = name;
//    }
//
//    public String getName() {
//        return name;
//    }
//
//    public void setName(String name) {
//        this.name = name;
//    }
//}
