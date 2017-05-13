rectangleCollision = function(r1, r2) {

    let side, overlap, combinedHalfWidths, combinedHalfHeights, overlapX, overlapY, vx, vy;

    vx = r1.centerX - r2.centerX;
    vy = r1.centerY - r2.centerY;

    combinedHalfWidths = Math.abs(r1.halfWidth) + Math.abs(r2.halfWidth);
    combinedHalfHeights = Math.abs(r1.halfHeight) + Math.abs(r2.halfHeight);

    if (Math.abs(vx) < combinedHalfWidths) {

    	if (Math.abs(vy) < combinedHalfHeights) {

	        overlapX = combinedHalfWidths - Math.abs(vx);
	        overlapY = combinedHalfHeights - Math.abs(vy);

	        if (overlapX >= overlapY) {

	        	if (vy > 0) {
	        		side = "top";
	        		overlap = overlapY;
				} else {
	            	side = "bottom";
	            	overlap = overlapY;
	        	}
	        } else {
				if (vx > 0) {
		        	side = "left";
		        	overlap = overlapX;
	        	} else {
		            side = "right";
		            overlap = overlapX;
	    		}
	        }
	    } else {
	        //No collision
	    }
    } else {
      //No collision
    }

	if (side) return {side: side, overlap: overlap};
}

getCollisions = function(hitbox, checkArray) {
	let result = [];

	// Check hitbox against each item in checkArray
	checkArray.forEach(function(item) {
		let collision;
		if (collision = rectangleCollision(hitbox, item)) {
			result.push(collision);
		}
	});

	if (result.length > 0) return result;
}