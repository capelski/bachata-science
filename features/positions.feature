Feature: Positions

    Scenario: Position preview displays the position name
        Given a position with id "position-id"
        And with position name "Position name"
        When rendering a position preview component for the position
        Then the position preview contains a link with text "Position name"

    Scenario: Position preview contains a link to the position
        Given a position with id "position-id"
        When rendering a position preview component for the position
        Then the position preview contains a link to "/position/position-id?$modena=bachata-science"

    Scenario: Positions list component renders a position preview for each existing position
        Given the positions defined in "positions.json"
        When rendering a positions list component
        Then the list contains 2 position preview components

    Scenario Outline: Positions list allows filtering positions by name
        Given the positions defined in "positions.json"
        When rendering a positions list component
        And writing "<text>" in the positions filter
        Then the list contains <resultsNumber> position preview components

        Examples:
            | text | resultsNumber |
            | o    | 2             |
            | one  | 1             |
            | ONE  | 1             |
            | abc  | 0             |
            |      | 2             |

    Scenario: Positions list displays a message when no results match the filter
        Given the positions defined in "positions.json"
        When rendering a positions list component
        And writing "no matching text" in the positions filter
        Then a no positions found message is displayed in the list