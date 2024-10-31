import random

# Generate a random inflation rate between -2.5% and 10%
inflation = random.uniform(-0.025, 0.1)

# Ask the user for their perception of the current inflation rate
try:
    user_input = float(input("What do you think is the inflation level now (as a decimal)? "))
except ValueError:
    print("Please enter a valid number.")
else:
    # Display the actual inflation rate for context
    print("The actual inflation rate is " + inflation + ".")

    # Compare user input with actual inflation
    if user_input < inflation:
        print("Uh oh, you have less purchasing power next year!")
    else:
        print("Wow, you can maintain your lifestyle despite inflation.")

    # Check if inflation is negative (deflation)
    if inflation < 0:
        if user_input >= inflation:
            input("Are you sure you need this much money?")
        else:
            print("Oh no! I am so sorry about the financial situation now!")