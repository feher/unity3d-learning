#pragma strict

function Start () {

}

var smooth : float = 5.0;
var tiltAngle : float = 60.0;

function Update () {
	var screenWidthHalf : float = (Screen.width / 2);
	transform.position.x =
		(Input.mousePosition.x - screenWidthHalf)
		/ screenWidthHalf;
	
	var screenHeightHalf : float = (Screen.height / 2);
	transform.position.z =
		(Input.mousePosition.y - screenHeightHalf)
		/ screenHeightHalf;

	var tiltAroundZ : float = Input.GetAxis("Mouse X") * tiltAngle;
	var tiltAroundX : float = Input.GetAxis("Mouse Y") * tiltAngle;
	var target : Quaternion =
		Quaternion.Euler(tiltAroundX, 0, tiltAroundZ);
	transform.rotation =
		Quaternion.Slerp(
			transform.rotation,
			target,
		 	Time.deltaTime * smooth);
}
