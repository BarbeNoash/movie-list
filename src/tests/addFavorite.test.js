import React from 'react';
import Favorites from '../components/Favorites';
import renderer from 'react-test-renderer';

test('Add Favorite to favorite list', () => {
  const component = renderer.create(
   <li key="movie1">
        <span>⭐ "bonjour"</span>
      </li>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.renderFavorite();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});