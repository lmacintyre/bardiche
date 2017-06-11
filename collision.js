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

cloneHitbox = function(hitbox) {
	return {
		centerX: hitbox.centerX,
		centerY: hitbox.centerY,

		halfWidth: hitbox.halfWidth,
		halfHeight: hitbox.halfHeight
	}
}

buildHitbox = function(hitbox) {
	hitbox.halfWidth = hitbox.width / 2;
	hitbox.halfHeight = hitbox.height / 2;
	hitbox.centerX = hitbox.x + hitbox.halfWidth;
	hitbox.centerY = hitbox.y + hitbox.halfHeight;
}

drawHitbox = function(hitbox, renderer) {
	renderer.drawRect(
		hitbox.centerX - hitbox.halfWidth - player.hitbox.centerX + 256,
		hitbox.centerY - hitbox.halfHeight - player.hitbox.centerY + 320,
		hitbox.halfWidth*2,
		hitbox.halfHeight*2
	);
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

resolveCollision = function(Actor, collision) {
	let side = collision.side, overlap = collision.overlap;

	if (side == "top") {
		moveActor(Actor, 0, overlap);

	} else if (side == "bottom") {
		moveActor(Actor, 0, overlap * -1);
		Actor.grounded = true;

	} else if (side == "left") {
		moveActor(Actor, overlap, 0);

	} else if (side == "right") {
		moveActor(Actor, overlap * -1, 0);
	} 
}

moveLine = function(L, x, y) {
	L.p1.x += x; L.p1.y += y;
	L.p2.x += x; L.p2.y += y;
}

linesCross = function(A, B) {
	if (A.p1.x < B.p1.x || A.p1.x > B.p2.x) return undefined;
	if (B.p1.y < A.p1.y || B.p1.y > A.p2.y) return undefined;

	return {
		side: 'bottom',
		overlap: A.p2.y - B.p2.y
	};
}