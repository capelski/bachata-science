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

    Scenario: Steps list component renders a step preview for each existing step
        Given the steps defined in "steps.json"
        When rendering a steps list component
        Then the list contains 3 step preview components

    Scenario Outline: Steps list allows filtering steps by name
        Given the steps defined in "steps.json"
        When rendering a steps list component
        And writing "<text>" in the steps filter
        Then the list contains <resultsNumber> step preview components

        Examples:
            | text | resultsNumber |
            | o    | 2             |
            | one  | 1             |
            | ONE  | 1             |
            | abc  | 0             |
            |      | 3             |