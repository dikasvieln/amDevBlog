---
title: Simple Unit Test Using RSpec for Ruby
date: "2021-10-08"
# featuredImage: './sky-blue.jpg'
---

Hello, guys. How have you've been lately?
last month I didn't continue my daily routine to write some article. Now, This will be simple and quick article. At least I'm doing what should I do to post a new latest article.

Okay, I'll share you about simple unit test using RSpec for ruby.
So as you may know Rspec was a framework about Behaviour Driven Development and focusing on domain-specific testing tool especially for Ruby.
History of ruby Rspec was release in May 2007 by Steven Baker and the early team contribution Dave Astels and Aslak Hellesøy.
Rspec 1.0 has many feature that we can still used at version 4.0 which is released in March 2020. 

Here is below some example script that which can run Rspec ruby
```
require './lib/calculator'

describe Calculator do
  describe "#add" do
    it "returns the of two numbers" do
     #calculator = Calculator.new
     #expect(calculator.add(5,2)).to eql(7)
    end
    
    it "returns the sum of more than two numbers" do
      calculator = Calculator.new
      expect(calculator.add(2,3,4)).to eql(9)
    end
  end

  it "return the multiply of two" do  
    calculator = Calculator.new
    expect(calculator.multiply(4,3)).to eql(12)   
  end

  it "return the divide of two" do
    calculator = Calculator.new
    expect(calculator.divide(6,2)).to eql(3)
  end

  it "return the substract of two" do
    calculator = Calculator.new
    expect(calculator.substract(4,2)).to eql(2)
  end
end
```

The script can run by install gem file, and after that you can use the Rspec cli

```
rspec --format documentation
```

Hope this article could share introduction about how BDD testing on programming language especially on ruby.


