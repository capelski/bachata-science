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