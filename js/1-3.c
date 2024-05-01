#include <stdio.h>

int main(void)
{
	// int x, *y;

	// x = 1;
	// y = &x;
	// printf("%d %d\n", x, *y);
	// x = 3;
	// printf("%d %d\n", x, *y);

	int x, y;

	x = 1;
	y = x;
	printf("%d %d\n", &x, &y); // 128830176 128830180
}