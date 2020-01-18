Feature: Steps

    Scenario: Step preview displays the step name
        Given a step with id "step-id"
        And with step name "Step name"
        When rendering a step preview component for the step
        Then the step preview contains a link with text "Step name"

    Scenario: Step preview contains a link to the step
        Given a step with id "step-id"
        When rendering a step preview component for the step
        Then the step preview contains a link to "/step/step-id?$modena=bachata-science"